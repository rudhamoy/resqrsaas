

const Header = () => {
  return (
    <div className="bg-gray-900">
        <div className="flex justify-between p-6 px-28">
            <div className="text-2xl font-bold text-white">B<span className="text-4xl text-yellow-600">4</span>BYTE</div>
            <ul className="flex justify-around gap-x-4 font-serif text-gray-300">
                <li>Pricing</li>
                <li>Features</li>
                <li>FAQ</li>
                <li>Contact us</li>
            </ul>
        </div>
    </div>
  )
}

export default Header