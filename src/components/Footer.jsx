import CopyrightIcon from "../assets/icons/copyright-symbol-svgrepo-com.svg"

const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <img src={CopyrightIcon} alt="copyright" className="w-5 h-5"/>
      <p>
        2025 Suraj Khatri · Web Developer
      </p>

    </div>
  )
}

export default Footer