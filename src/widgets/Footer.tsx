import { useTranslation } from 'react-i18next'
import {
  FaTelegramPlane,
  FaVk,
  FaPinterestP,
  FaSkype,
} from 'react-icons/fa'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-[#18121E] text-white py-10 px-6 md:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-lg font-semibold mb-3">{t('footer.company')}</h2>
          <p className="text-sm text-gray-300 mb-4">{t('footer.description')}</p>
          <div className="flex flex-col text-sm gap-1">
            <a href="mailto:info@domain.com" className="text-blue-400 underline">
              {t('footer.email')}
            </a>
            <a href="tel:+71234567890" className="text-blue-400 underline">
              {t('footer.phone')}
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">{t('footer.navigation')}</h2>
          <ul className="flex flex-col gap-2 text-sm text-gray-300">
            <li>› {t('footer.links.home')}</li>
            <li>› {t('footer.links.about')}</li>
            <li>› {t('footer.links.poland')}</li>
            <li>› {t('footer.links.germany')}</li>
            <li>› {t('footer.links.russia')} sdasd</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">{t('footer.socials')}</h2>
          <div className="flex items-center gap-4">
            <a href="#" className="bg-white text-black p-2 rounded-full">
              <FaTelegramPlane />
            </a>
            <a href="#" className="bg-white text-black p-2 rounded-full">
              <FaVk />
            </a>
            <a href="#" className="bg-white text-black p-2 rounded-full">
              <FaPinterestP />
            </a>
            <a href="#" className="bg-white text-black p-2 rounded-full">
              <FaSkype />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
