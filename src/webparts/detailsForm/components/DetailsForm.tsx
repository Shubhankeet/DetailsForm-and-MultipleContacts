import * as React from 'react';
import { useState } from 'react';
import styles from './DetailsForm.module.scss';
import { buttonDefault, buttonPrimary, headerSubPivot, stackItemCardOne, stackItemCardTwo } from './DetailsForm.constants';
import { Web } from "sp-pnp-js";
import { sp } from "@pnp/sp/presets/all";
import { DefaultButton, Pivot, PivotItem, PivotLinkFormat, PivotLinkSize, PrimaryButton, Stack } from 'office-ui-fabric-react';
import AboutClient from './AboutClient';
import Competition from './Competition';
import ProjectKickOff from './ProjectKickOff';
import AdditionalInformation from './AdditionalInformation';
import ContactStatus from './ContactStatus';

const DetailsForm = (props: any) => {
  const { context, siteUrl } = props;

  const web = new Web(siteUrl);
  sp.setup(context);

  const stackTokens = { childrenGap: 20 };

  //declare states
  const [clientType, setClientType] = useState("");
  const [industry, setIndustry] = useState("");
  const [alliance, setAlliance] = useState("");
  const [location, setLocation] = useState("");
  const [employees, setEmployees] = useState("");
  const [revenue, setRevenue] = useState("");
  const [account, setAccount] = useState("");

  const [gtComp, setGtComp] = useState("");
  const [pursuitTeam, setPursuitTeam] = useState("");
  const [dealAmt, setDealAmt] = useState("");

  const [projectKickOff, setProjectKickOff] = useState("");
  const [target, setTarget] = useState("");

  const [questionaire1, setQuestionaire1] = useState("");
  const [questionaire2, setQuestionaire2] = useState("");
  const [questionaire3, setQuestionaire3] = useState("");
  const [questionaire4, setQuestionaire4] = useState("");
  const [questionaire5, setQuestionaire5] = useState("");

  const [contact, setContact] = useState("");

  const [clearAll, setClearAll] = useState(false);

  const queryParams = new URLSearchParams(window.location.search);
  let tabKey = queryParams.get("tabKey");
  const handleSelectedTab = (temptab) => {
    const url = new URL(window.location.href);
    url.searchParams.set('tabKey', temptab);
    window.history.replaceState(null, null, url.toString());
    tabKey = temptab;
  };
  if (!tabKey) {
    handleSelectedTab("ShareAllianceWins");
  }

  const handleSubmit = () => {
    if (clientType.trim().length == 0 || industry.trim().length == 0 || alliance.trim().length == 0 ||
      location.trim().length == 0 || employees.trim().length == 0 || revenue.trim().length == 0 ||
      account.trim().length == 0 || gtComp.trim().length == 0 || projectKickOff.trim().length == 0 || target.trim().length == 0 ||
      contact.trim().length == 0) {
      alert("Please fill up the required fields.")
    } else {
      web.lists.getByTitle("DetailsForm").items.add({
        Title: clientType,
        ClientType: clientType,
        Industry: industry,
        Alliance: alliance,
        Location: location,
        Employees: employees,
        Revenue: revenue,
        Account: account,
        GTComp: gtComp,
        PursuitTeam: pursuitTeam,
        DealAmount: dealAmt,
        ProjectKickOff: projectKickOff,
        Target: target,
        Questionaire1: questionaire1,
        Questionaire2: questionaire2,
        Questionaire3: questionaire3,
        Questionaire4: questionaire4,
        Questionaire5: questionaire5,
        Contact: contact
      })
        .then(submitted => {
          alert("Your data has been submitted successfuly.");
          handleClear();
        })
        .catch(error => {
          alert("Error: " + error);
        });
    }
  };

  const handleClear = () => {
    setClearAll(true);
  };

  const captureAboutClientDetails = (key: any, value: string) => {
    if (key === 1)
      setClientType(value);
    if (key === "industry1" || key === "industry2" || key === "industry3" || key === "industry4" || key === "industry5")
      setIndustry(value);
    if (key === 2)
      setAlliance(value);
    if (key === 3)
      setLocation(value);
    if (key === 4)
      setEmployees(value);
    if (key === 5)
      setRevenue(value);
    if (key === "account1" || key === "account2" || key === "account3" || key === "account4" || key === "account5")
      setAccount(value);
  };

  const captureCompetitionDetails = (key: any, value: string) => {
    if (key === 1)
      setGtComp(value);
    if (key === 2)
      setPursuitTeam(value);
    if (key === 3)
      setDealAmt(value);
  };

  const captureKickOffDetails = (key: any, value: string) => {
    if (key === 1)
      setProjectKickOff(value);
    if (key === 2)
      setTarget(value);
  };

  const captureAdditionalInfoDetails = (key: any, value: string) => {
    if (key === 1)
      setQuestionaire1(value);
    if (key === 2)
      setQuestionaire2(value);
    if (key === 3)
      setQuestionaire3(value);
    if (key === 4)
      setQuestionaire4(value);
    if (key === 5)
      setQuestionaire5(value);
  };

  const captureContactStatusDetails = (key: any, value: string) => {
    if (key === 1)
      setContact(value);
  };

  const onTabSelect = (item?: PivotItem, env?: React.MouseEvent<HTMLElement>) => {
    handleSelectedTab(item.props.itemKey);
  };

  return (
    <>
      <Pivot aria-label="Link of Tab Style Pivot" linkFormat={PivotLinkFormat.tabs} styles={headerSubPivot} linkSize={PivotLinkSize.large}
        defaultSelectedKey={tabKey} onLinkClick={onTabSelect}>
        <PivotItem itemKey={"AllianceWins"} headerText="Alliance wins">
          <div className="ms-Grid-row" style={{ marginTop: '10px', marginBottom: '20px' }}>
            <div className={`ms-Grid-col ms-sm9`}>
              <p className={styles.labelStyle} style={{ marginBottom: '9px' }}>Switch to Second Tab for content.</p>
            </div>
          </div>
        </PivotItem>

        <PivotItem itemKey={"ShareAllianceWins"} headerText="Share Alliance wins">
          <div className="ms-Grid-row" style={{ marginTop: '10px', marginBottom: '20px' }}>
            <div className={`ms-Grid-col ms-sm9`}>
              <p className={styles.labelStyle} style={{ marginBottom: '9px' }}>Enter details below, All fields marked <span style={{ color: 'red' }}>*</span> are required fields.</p>
            </div>
            <div className={`ms-Grid-col ms-sm3`}>
              <div style={{ textAlign: 'right' }}>
                <PrimaryButton onClick={handleSubmit} styles={buttonPrimary} style={{ backgroundColor: '#A020F0', border: '0px' }}>Submit wins</PrimaryButton>
                <DefaultButton onClick={handleClear} styles={buttonDefault} style={{ backgroundColor: '#FFFFFF' }}>Clear all</DefaultButton>
              </div>
            </div>
          </div>
          <Stack horizontal tokens={stackTokens}>
            <Stack.Item styles={stackItemCardOne}>
              <AboutClient captureAboutClientDetails={captureAboutClientDetails} clearAll={clearAll} setClearAll={setClearAll} />
            </Stack.Item>

            <Stack.Item styles={stackItemCardTwo}>
              <Stack tokens={stackTokens}>
                <Competition captureCompetitionDetails={captureCompetitionDetails} clearAll={clearAll} setClearAll={setClearAll} />
              </Stack>

              <Stack tokens={stackTokens} style={{ marginTop: '15px' }}>
                <ProjectKickOff captureKickOffDetails={captureKickOffDetails} clearAll={clearAll} setClearAll={setClearAll} />
              </Stack>
            </Stack.Item>
          </Stack>

          <Stack tokens={stackTokens} style={{ marginTop: '15px' }}>
            <AdditionalInformation captureAdditionalInfoDetails={captureAdditionalInfoDetails} clearAll={clearAll} setClearAll={setClearAll} />
          </Stack>

          <Stack tokens={stackTokens} style={{ marginTop: '15px' }}>
            <ContactStatus captureContactStatusDetails={captureContactStatusDetails} clearAll={clearAll} setClearAll={setClearAll} />
          </Stack>
        </PivotItem>

        <PivotItem itemKey={"AllianceWinsInstructions "} headerText="Alliance wins instructions">
          <div className="ms-Grid-row" style={{ marginTop: '10px', marginBottom: '20px' }}>
            <div className={`ms-Grid-col ms-sm9`}>
              <p className={styles.labelStyle} style={{ marginBottom: '9px' }}>Switch to Second Tab for content.</p>
            </div>
          </div>
        </PivotItem>
        
        <PivotItem itemKey={"MyRequests"} headerText="My requests">
          <div className="ms-Grid-row" style={{ marginTop: '10px', marginBottom: '20px' }}>
            <div className={`ms-Grid-col ms-sm9`}>
              <p className={styles.labelStyle} style={{ marginBottom: '9px' }}>Switch to Second Tab for content.</p>
            </div>
          </div>
        </PivotItem>
      </Pivot>
    </>
  );
};

export default DetailsForm;
