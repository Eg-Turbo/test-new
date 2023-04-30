import { Link } from "react-router-dom";
function MainBtn({ path, title }) {
  return (
    <Link
      to={path}
      className="bg-main-color px-4 py-2 rounded-md text-xl text-white"
    >
      {title}
    </Link>
  );
}
export default MainBtn;
