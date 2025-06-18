import { FaPaperPlane, FaMicrophone, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
function Header() {
  return (
    // Header section with flex layout for content alignment.
    <header className="flex items-center justify-between bg-white p-6 border-b border-black">
      {/* Left section for titles */}
      <div>
        <h1 className="text-[3.5rem] font-bangers leading-tight">Ask Anything About Tarun</h1>
        <p className="text-[1.75rem] font-bangers mt-2">(To find out whether he is a good fit for the AI Agent Team)</p>
      </div>
      {/* Right section for profile image and social links */}
      <div className="flex flex-col items-center">
        {/* Profile image with rounded corners and border */}
        <img src={profile} alt="Tarun" className="w-32 h-32 rounded-full mb-2 border-2 border-black" />
        {/* Social media icons with links */}
        <div className="flex gap-4">
          <a href="https://wa.me/7737343549" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp className="text-black text-2xl hover:text-green-500" />
          </a>
          <a href="https://www.linkedin.com/in/gehlottarun1898/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-black text-2xl hover:text-blue-600" />
          </a>
        </div>
      </div>
    </header>
  );
}
// ...existing code...
export default Header;