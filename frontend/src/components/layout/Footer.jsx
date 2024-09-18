export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left">this is footer</p>
        <ul className="flex space-x-4 mt-4 md:mt-0">
          <li>
            <a href="#" className="hover:text-gray-400">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
