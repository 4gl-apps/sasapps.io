import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from '../components/layout/layout'
import Meta from '../components/meta/meta'
import Breadcrum from '../components/breadcrum/breadcrum'
import LinkButton from '../components/button/link-button'

import bfSvg from '../../assets/business-finance.svg'
import stSvg from '../../assets/statistics.svg'
import chSvg from '../../assets/charts.svg'
import inSvg from '../../assets/information.svg'
import bgSvg from '../../assets/bar-graph.svg'
import fiSvg from '../../assets/financing.svg'

interface Props {
  location: Location
}

const Solutions: React.FC<Props> = ({ location }: Props) => {
  const meta = { ...siteMetadata, location }

  return (
    <Layout location={location}>
      <Meta
        site={meta}
        title="SAS App Solutions"
        customDescription="SAS Solutions to Address Business Challenges"
      />
      <Breadcrum
        links={[
          { label: 'Home', to: '/' },
          { label: 'Solutions', to: '#' },
        ]}
      />
      <div className="container about-us">
        <h3 className="custom-heading">Solutions</h3>
        <h1>Tailored Solutions for Specific Outcomes</h1>
        <div className="row buttom-margin-child">
          <div className="col-md-6 col-xl-4">
            <div className="card no-button" id="SAS-Powered-HTML5-Apps">
              <img src={bfSvg} alt="SAS-Powered HTML5 Apps" />
              <h3>SAS-Powered HTML5 Apps</h3>
              <p>
                Let SAS come to you – with a bespoke app, tailor made to your
                specific workflow and reporting requirements. Built with fully
                open source tools, standard frameworks, and delivered with full
                documentation – you can choose to maintain in-house or choose a
                competitive and transparent support package.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div
              className="card no-button"
              id="performance-monitoring-and-platform-alerts"
            >
              <img
                src={stSvg}
                alt="Performance Monitoring and Platform Alerts"
              />
              <h3>Performance Monitoring and Platform Alerts</h3>
              <p>
                Gain a real time and historical perspective of your SAS platform
                with a highly customisable performance dashboard. Configure
                automated alerts (eg email, SMS, phone call) on virtually any
                event – disk usage, changes to metadata, addition of new
                columns, new admin users - (almost) anything you can imagine..
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card no-button" id="EUC-Data-Capture-Control">
              <img src={chSvg} alt="EUC Data Capture & Control" />
              <h3>EUC Data Capture & Control</h3>
              <p>
                Reduce spreadsheet risk by enabling business users to self-load
                VBA driven Excel reporting tools into your preferred database
                with Data Quality at source, 4 eyes (or more) approval at each
                step, and full audit traceability back to the original EUC that
                generated the results.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div
              className="card no-button"
              id="Modernise-legacy-AF-SCL-Desktop-Apps"
            >
              <img src={inSvg} alt="Modernise legacy AF/SCL Desktop Apps" />
              <h3>Modernise legacy AF/SCL Desktop Apps</h3>
              <p>
                Migrate legacy AF/SCL applications directly to SAS9 or Viya,
                improving the user experience, security,scalability, and
                delivering a modern, self-supportable application built on open
                source technology and a modern SAS stack.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div
              className="card no-button"
              id="Viya-Readiness-Migration-Service-for-Existing-SAS-9-Apps"
            >
              <img
                src={bgSvg}
                alt="Viya Readiness & Migration Service for Existing SAS 9 Apps"
              />
              <h3>
                Viya Readiness & Migration Service for Existing SAS 9 Apps
              </h3>
              <p>
                Rebuild your existing SAS 9 applications using modern,
                supportable frameworks (eg React or Angular) in such a way that
                they can be easily maintained by generic developers, and later
                ‘flipped’ to Viya.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card no-button" id="SAS9-Health-Report">
              <img src={fiSvg} alt="SAS9 Health Report" />
              <h3>SAS9 Health Report</h3>
              <p>
                Perform a complete scan of your SAS 9 platform to identify
                common &quot;trouble spots&quot; – such as dangling metadata,
                security misconfigurations, SAS coding issues, custom code in DI
                Studio, missing primary keys – and much much more.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <LinkButton path={'/contact-us'} label="Contact Us" />
        </div>
      </div>
    </Layout>
  )
}

export default Solutions
