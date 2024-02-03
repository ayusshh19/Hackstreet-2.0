import { useNavigate } from "react-router-dom";

function Button  ({ icon, label, buttonStyle,baseurl }) {
    const navigate = useNavigate()
    const Usersignup= ()=>{
        localStorage.setItem("BaseUrl",baseurl)
        navigate("/signup")
    }
  return (
    <button
      className={`
inline-flex items-center justify-center gap-2 bg-fillcomp text-sm font-semibold text-white shadow-sm transition-all duration-150 rounded-xl px-3 py-2 hover:bg-[#168b86] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${buttonStyle}`}
onClick={Usersignup}
    >
      {label}
      {icon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      )}
    </button>
  );
};
export default Button