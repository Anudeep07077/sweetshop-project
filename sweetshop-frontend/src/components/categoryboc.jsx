function CategoryBox({ title, isActive, onClick }) {
  return (
    <div
      className={isActive ? "category-box active" : "category-box"}
      onClick={onClick}
    >
      {title}
    </div>
  );
}

export default CategoryBox;
