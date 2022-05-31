/* 
  【TodoItemコンポーネント】
 ・Todoアイテムを表示する
 ・チェックボックスにチェックが入っているか管理する
 ・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({ item }) {
  return (
    <label className="panel-block">
      <span>
        {item.text}
      </span>
    </label>
  );
}

export default TodoItem;