import load_brand from "~/plugins/load-brand";

export const server_refresh = (context) => refresh(context).then(r => r.status !== 200 ? context.redirect("/login?redirect_url=" + context.route.path) : load_brand(context, null, r.data.access));

export const client_refresh = (context) => refresh(context).then(r => {
  let router = context.$router || context.app.router;
  if(r.status === 401) router.push("/login?redirect_url=" + context.route.path);
  else {
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", window.location.origin + "/version.txt", false);
    rawFile.onreadystatechange = function() {
      if(rawFile.readyState === 4) {
        if(rawFile.status === 200 || rawFile.status == 0) {
          let version = rawFile.responseText;
          let store = context.$store || context.store;
          if(store.state.version === null) {
            store.commit("setVersion", version);
          } else if (store.state.version !== version) {
            store.commit("setNewRelease");
          }
        }
      }
    };
    rawFile.send(null);
  }
  return r;
});

export const refresh = (context) =>
  context.$axios.post("/token/refresh/", {
    "refresh": context.$cookies.get("refresh-token")
  }).then(resp => {
    context.$cookies.set("access-token", resp.data.access);
    return resp;
  }).catch(r => {
    if (r.message === "Network Error") return { status: 500 };
    let store = context.store || context.$store;
    clearInterval(store.state.interval);
    context.$cookies.removeAll();
    return r.response;
  });

export const init_refresh = (context, initial_call) => {
  if(initial_call) {
    client_refresh(context);
  }
  let interval = setInterval(() => client_refresh(context), process.env.REFRESH_INTERVAL_SEC * 1000);
  let store = context.$store || context.store;
  store.commit("setInterval", interval);
};

export const get_auth_header = (context) => {
  return { headers: { Authorization: "Bearer " + context.$cookies.get("access-token") } };
};

export const get_pos_auth_header = (baseApiKey) => {
  return { headers: { "x-api-key": baseApiKey } };
};


export const get_default_head = (context, title_suffix) => {
  return {
    title: context.brand.platform_name + title_suffix,
    link: [{
      hid: "shortcut icon",
      rel: "shortcut icon",
      href: context.brand.favicon
    }],
    meta: [{
      hid: "theme-color",
      name: "theme-color", 
      content: context.brand.theme.primary
    }]
  };
};

export const logout = (context) => {
  let store = context.store || context.$store;
  clearInterval(store.state.interval);
  let cfg = get_auth_header(context);
  context.$axios.post("/authentication/logout/", {
    refresh: context.$cookies.get("refresh-token")
  }, cfg).catch(() => {});
  context.$cookies.removeAll();
  let router = context.$router || context.app.router;
  router.push("/login");
};

export const validateFileType = (type, val) => {
  let valType = val.split(".").pop().toLowerCase();
  switch(type) {
  case "img": return /png/.test(valType) || /jpg/.test(valType) || /jpeg/.test(valType);
  case "pdf": return /pdf/.test(valType);
  case "doc": return /doc/.test(valType);
  case "xls": return /xls/.test(valType) || /csv/.test(valType);
  case "ppt": return /ppt/.test(valType);
  default: return null;
  }
};

export const validateURLFileTypeReturnIcon = (context, val) => {
  let str = val.split(".").pop().toLowerCase();
  if (/png/.test(str) || /jpg/.test(str) || /jpeg/.test(str)) return context.JpgFileIcon;
  else if (/pdf/.test(str)) return context.PdfFileIcon;
  else if (/doc/.test(str)) return context.DocFileIcon;
  else if (/xls/.test(str) || /csv/.test(str)) return context.XlsFileIcon;
  else if (/ppt/.test(str)) return context.PptFileIcon;
};

export const urlify = (txt) => {
  if (!txt) return;
  var urlRegex = /(<img\s[^>]*>|<a(?:\s[^>]*)?>[\s\S]*?<\/a>|<iframe(?:\s[^>]*)?>[\s\S]*?<\/iframe>)|(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gi; // eslint-disable-line no-useless-escape
  return txt.replace(urlRegex, function(url, tag) {
    if (tag) return url;
    var hyperlink = url;
    if (!hyperlink.match("^https?:\/\/")) { // eslint-disable-line no-useless-escape
      hyperlink = "https://" + hyperlink;
    }
    return "<a href=\"" + hyperlink + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + url + "</a>";
  });
};

export const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const format_time = (val) => {
  if(val < 0) return "00:00:00";
  var seconds = parseInt(val, 10); // don't forget the second param
  var hours   = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds - (hours * 3600)) / 60);
  seconds = seconds - (hours * 3600) - (minutes * 60);
  if (hours   < 10) {hours   = "0" + hours;}
  if (minutes < 10) {minutes = "0" + minutes;}
  if (seconds < 10) {seconds = "0" + seconds;}
  var time    = hours + ":" + minutes + ":" + seconds;
  return time;
};

export const convert_date_format = (date)=> {
  if (date !== null && date !== undefined) {
    let isYYYYMMDD = date.split("/")[0] === date;
    let isDDMMYYYY = date.split("-")[0] === date;
    if (isYYYYMMDD) {
      let date_aux = date.split("-").reverse().join("/");
      return date_aux;
    } else if (isDDMMYYYY) {
      let date_aux = date.split("/").reverse().join("-");
      return date_aux;
    }
  } else {
    return date;
  }
};

export function formatCurrency(amount) {
  return amount ?  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(amount) : "-";
}

export const getSimpleDate = (date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

export function moveObjectToStart(array, description, category) {
  const index = array.findIndex(obj => obj.description.toLowerCase() === description.toLowerCase() && obj.category === category);
  if (index !== -1) {
    const object = array.splice(index, 1)[0];
    array.unshift(object);
  }
}
