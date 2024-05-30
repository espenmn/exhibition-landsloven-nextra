import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image';

// To DO: Change url of project

const config: DocsThemeConfig = {
  logo: (
    <div className='flex gap-3'>
      <Image src="/images/landslov-logo.png" alt="Logo" width={200} height={40} />
      {/* <span className='font-antiqua'>Landsloven</span> */}
    </div>
  ),
  i18n: [
    { locale: 'no', text: 'Norsk' },
    { locale: 'en', text: 'Engelsk' },
  ],
  search: {
    placeholder: 'Søk',
  },
  docsRepositoryBase: 'https://github.com/uib-ub/exhibition-landsloven-nextra',
  footer: {
    text: 'Universitetsbiblioteket i Bergen, Høyskolen på Vestlandet, Vestland fylkeskommune',
  },
}

export default config
