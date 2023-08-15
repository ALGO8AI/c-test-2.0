import pureAxios from "axios";

const axios = pureAxios.create({
  //   baseURL: process.env.REACT_APP_API_URL,
  headers: {
    common: {
      Authorization: `${localStorage.getItem("access_token_backend")}`,
    },
  },
});

axios.interceptors.request.use((config) => {
  // Add security headers to the request headers
  config.headers["Content-Security-Policy"] = "use default";
  config.headers["X-Frame-Options"] = "DENY";
  config.headers["X-XSS-Protection"] = "1; mode=block";
  config.headers["Strict-Transport-Security"] =
    "max-age=31536000; includeSubDomains";
  config.headers["X-Content-Type-Options"] = "nosniff";
  config.headers["Referrer-Policy"] = "same-origin";
  config.headers["Permissions-Policy"] =
    "geolocation=(self), microphone=(), camera=(), fullscreen=(self), payment=(), sync-xhr=(self)";

  return config;
});

axios.interceptors.response.use(
  function (config) {
    console.log(config);
    config.headers["Content-Security-Policy"] = "use default";
    config.headers["X-Frame-Options"] = "DENY";
    config.headers["X-XSS-Protection"] = "1; mode=block";
    config.headers["Strict-Transport-Security"] =
      "max-age=31536000; includeSubDomains";
    config.headers["X-Content-Type-Options"] = "nosniff";
    config.headers["Referrer-Policy"] = "same-origin";
    config.headers["Permissions-Policy"] =
      "geolocation=(self), microphone=(), camera=(), fullscreen=(self), payment=(), sync-xhr=(self)";

    return config;
  },
  function axiosLogoutInterceptor(err) {
    return Promise.reject(err);
  }
);

export default axios;
