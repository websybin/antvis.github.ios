import React from 'react';
import SEO from '@antv/gatsby-theme-antv/site/components/Seo';
import Banner from '@antv/gatsby-theme-antv/site/components/Banner';
import Features from '@antv/gatsby-theme-antv/site/components/Features';
import Companies from '@antv/gatsby-theme-antv/site/components/Companies';
// import BannerPage from '../components/bannerPage/bannerPage';
import ProductsPage from '../components/productsPage/productsPage';
import DecisionTreePage from '../components/decisionTreePage/decisionTreePage';
import ResourcesPage from '../components/resourcesPage/resourcesPage';
import DescribePage from '../components/describePage/describePage';
// import AdvantagesPage from '../components/advantagesPage/advantagesPage';
import QuotesPage from '../components/quotesPage/quotesPage';
// import CompaniesPage from '../components/companiesPage/companiesPage';
import BannerSVG from '../components/bannerSVG/bannerSVG';
import { useTranslation } from 'react-i18next';
import './index.less';

const IndexPage = () => {
  const { t, i18n } = useTranslation();
  // i18n.options.keySeparator = '>';

  const features = [
    {
      index: 0,
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/5dbaf094-c064-4a0d-9968-76020b9f1510.svg',
      title: '简单方便',
      description: '从数据出发，仅需几行代码可以轻松获得想要的图表展示效果。',
    },
    {
      index: 1,
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/0a0371ab-6bed-41ad-a99b-87a5044ba11b.svg',
      title: '方便可靠',
      description:
        '大量产品实践之上，提供绘图引擎、完备图形语法，专业设计规范。',
    },
    {
      index: 2,
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/716d0bc0-e311-4b28-b79f-afdd16e8148e.svg',
      title: '无限可能',
      description: '任何图表，都可以基于图形语法灵活绘制，满足你无限的创意。',
    },
  ];

  const companies = [
    {
      name: 'alicloud',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Z1NnQ6L4xCIAAAAAAAAAAABkARQnAQ',
    },
    {
      name: 'alipay',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*6u3hTpsd7h8AAAAAAAAAAABkARQnAQ',
    },
    {
      name: 'tmall',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*58snT4MwuGcAAAAAAAAAAABkARQnAQ',
    },
    {
      name: 'taobao',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*14yvRoRDs4wAAAAAAAAAAABkARQnAQ',
    },
    {
      name: 'mybank',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Fw8HTbFgUdAAAAAAAAAAAABkARQnAQ',
    },
    {
      name: 'jd',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*lUdjTqQix48AAAAAAAAAAABkARQnAQ',
    },
    {
      name: 'yunos',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*1q8NQZ9GaN0AAAAAAAAAAABkARQnAQ',
    },
    {
      name: 'cainiao',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*SqmTSqj4FjEAAAAAAAAAAABkARQnAQ',
    },
  ];

  const bannerSVG = BannerSVG();

  return (
    <>
      <SEO title={t('蚂蚁数据可视化')} lang={i18n.language} />
      <div className="home-container" style={{ marginTop: '-24px' }}>
        <Banner
          coverImage={bannerSVG}
          title={t('让数据栩栩如生')}
          description={t(
            'AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
          )}
          buttonText={t('继续了解')}
          buttonHref={'#products'}
          className="banner"
        />
        <ProductsPage />
        {/* <DecisionTreePage /> */}
        <ResourcesPage />
        <DescribePage />
        <Features title="我们的优势" features={features} />
        <QuotesPage />
        <Companies title={t('2000+ 公司正在使用')} companies={companies} />
      </div>
    </>
  );
};

export default IndexPage;
