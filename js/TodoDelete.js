export function TodoDelete({ onDelete }) {
  const $todoList = document.querySelector("#todo-list");

  $todoList.addEventListener('click', event => this.clickDeleteBtn(event));

  this.clickDeleteBtn = event => {
    const $target = event.target;
    if (!$target.classList.contains("destroy")) {
      return;
    }
    event.preventDefault();
    if (confirm("삭제하시겠습니까?")) {
      const $list = $target.closest("li");
      const nodes = Array.from($todoList.children);
      let index = nodes.indexOf($list);
      onDelete(index);
    }
  }
}