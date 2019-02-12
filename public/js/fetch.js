const fetch = ({ method, url, value, callback }) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4)
      if (xhr.status === 200) {
        callback(null, JSON.stringify(xhr.responseText));
      } else {
        callback(
          new Error(`Server responded with status code of ${xhr.status}`)
        );
      }
  };
  xhr.open(method, url);
  xhr.send(value);
};
