import { graphql } from 'gatsby'
import React from 'react'

import { MetaQuery } from '../../types/graphql-types'
import Post from '../templates/post/post'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import LinkButton from '../components/button/link-button'

import bfSvg from '../../assets/business-finance.svg';
import stSvg from '../../assets/statistics.svg';
import chSvg from '../../assets/charts.svg';
import inSvg from '../../assets/information.svg';
import bgSvg from '../../assets/bar-graph.svg';
import fiSvg from '../../assets/financing.svg';

interface Props {
  data: MetaQuery
  location: Location
}

const Home: React.FC<Props> = ({ data, location }: Props) => {
  const meta = { ...data.site?.meta, location }

  return (
    <Layout location={location}>
      <Meta site={meta}/>
      <div className="main-background">
        <div className="container">
          <h4>Custom Interfaces to the world's most powerful Analytics Platform</h4>
          <div className="container card-gray">
            <p className="heading">Leverage your investment in SAS&reg; with a range of solution and product offerings to fit your specific needs. </p>
            <div className="row">
              <div className="col-12 col-md-9 col-lg-10">
                <p className="info">We blend decades of traditional SAS&reg; experience with open source technology offerings to give you well documented solutions that you can either maintain yourselves, or allow us to continue to support with a transparent range of support packages.</p>
              </div>
              <div className="col-md-3 col-lg-2 text-center">
                <LinkButton path={"/products"} label="Our Products" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h1>What We Offer:</h1>
        <div className="row buttom-margin-child">
          <div className="col-md-6 col-xl-4">
            <div className="card">
              <img src={bfSvg} alt="SAS-Powered HTML5 Apps" />
              <h3>SAS-Powered HTML5 Apps</h3>
              <p>Let SAS&reg; come to you – with a bespoke app, tailor made to your specific workflow and reporting requirements.  Built with fully open source tools, standard frameworks, and ...</p>
              <div className="wrapper"><LinkButton path={"/solutions/#SAS-Powered-HTML5-Apps"} label="Find Out More" /></div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card">
              <img src={stSvg} alt="Performance Monitoring and Platform Alerts" />
              <h3>Performance Monitoring and Platform Alerts</h3>
              <p>Gain a real time and historical perspective of your SAS&reg; platform with a highly customisable performance dashboard. Configure automated ...</p>
              <div className="wrapper"><LinkButton path={"/solutions/#performance-monitoring-and-platform-alerts"} label="Find Out More" /></div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card">
              <img src={chSvg} alt="EUC Data Capture & Control" />
              <h3>EUC Data Capture & Control</h3>
              <p>Reduce spreadsheet risk by enabling business users to self-load VBA driven Excel reporting tools into your preferred database with Data Quality at source, 4 eyes (or more) approval at each step ...</p>
              <div className="wrapper"><LinkButton path={"/solutions/#EUC-Data-Capture-Control"} label="Find Out More" /></div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card">
              <img src={inSvg} alt="Modernise legacy AF/SCL Desktop Apps" />
              <h3>Modernise legacy AF/SCL Desktop Apps</h3>
              <p>Migrate legacy AF/SCL applications directly to SAS9 or Viya, improving the user experience, security,scalability, and delivering a modern, self-supportable ...</p>
              <div className="wrapper"><LinkButton path={"/solutions/#Modernise-legacy-AF-SCL-Desktop-Apps"} label="Find Out More" /></div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card">
              <img src={bgSvg} alt="Viya Readiness & Migration Service for Existing SAS 9 Apps" />
              <h3>Viya Readiness & Migration Service for Existing SAS 9 Apps</h3>
              <p>Rebuild your existing SAS 9 applications using modern, supportable frameworks (eg React or Angular) in such a way that they can be easily ...</p>
              <div className="wrapper"><LinkButton path={"/solutions/#Viya-Readiness-Migration-Service-for-Existing-SAS-9-Apps"} label="Find Out More" /></div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card">
              <img src={fiSvg} alt="SAS9 Health Report" />
              <h3>SAS9 Health Report</h3>
              <p>Without changing anything on your SAS 9 platform, we perform a complete scan and provide you with an instant report of the  trouble spots – such as dangling metadata, security misconfigurations ...</p>
              <div className="wrapper"><LinkButton path={"/solutions/#SAS9-Health-Report"} label="Find Out More" /></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query MetaQuery {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
        author
        twitter
        facebook
        youtube
        linkedin
        adsense
      }
    }
  }
`
