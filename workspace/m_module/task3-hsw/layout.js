const userlayout = (() => {
  const showusers = (users) => {
    const wrap = document.getElementById("showinfo");
    let text = ``;

    posts.forEach(({ name, email }) => {
      text += `<tr>
      <td ${email.includes("biz") && "class=on"}>${email}</td>
      <td class="123">${name}</td>
      </tr>`;
    });
    wrap.innerHTML = text;
  };
  return { showusers: showusers };
})();
