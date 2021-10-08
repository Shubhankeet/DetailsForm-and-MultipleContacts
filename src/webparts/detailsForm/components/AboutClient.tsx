import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import styles from './DetailsForm.module.scss';
import { Dropdown, IDropdownOption, Separator, TextField } from 'office-ui-fabric-react';
import { dropDownStyles, textFieldStyles } from './DetailsForm.constants';

const AboutClient = (props: any) => {
    const { captureAboutClientDetails, clearAll, setClearAll } = props;

    const [clientType, setClientType] = useState("");
    const [industry, setIndustry] = useState("");
    const [alliance, setAlliance] = useState("");
    const [location, setLocation] = useState("");
    const [employees, setEmployees] = useState("");
    const [revenue, setRevenue] = useState("");
    const [account, setAccount] = useState("");

    const industryOptions: IDropdownOption[] = [
        { key: 'industry1', text: 'Industry 1' },
        { key: 'industry2', text: 'Industry 2' },
        { key: 'industry3', text: 'Industry 3' },
        { key: 'industry4', text: 'Industry 4' },
        { key: 'industry5', text: 'Industry 5' }
    ];

    const accountOptions: IDropdownOption[] = [
        { key: 'account1', text: 'Account 1' },
        { key: 'account2', text: 'Account 2' },
        { key: 'account3', text: 'Account 3' },
        { key: 'account4', text: 'Account 4' },
        { key: 'account5', text: 'Account 5' }
    ];

    const onClientTypeNewValue = useCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newProp?: string) => {
            let key = 1;
            captureAboutClientDetails(key, newProp || "");
            setClientType(newProp || "");
        },
        [],
    );

    const onAllianceNewValue = useCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newProp?: string) => {
            let key = 2;
            captureAboutClientDetails(key, newProp || "");
            setAlliance(newProp || "");
        },
        [],
    );

    const onLocationNewValue = useCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newProp?: string) => {
            let key = 3;
            captureAboutClientDetails(key, newProp || "");
            setLocation(newProp || "");
        },
        [],
    );

    const onEmployeesNewValue = useCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newProp?: string) => {
            let key = 4;
            captureAboutClientDetails(key, newProp || "");
            setEmployees(newProp || "");
        },
        [],
    );

    const onRevenueNewValue = useCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newProp?: string) => {
            let key = 5;
            captureAboutClientDetails(key, newProp || "");
            setRevenue(newProp || "");
        },
        [],
    );

    useEffect(() => {
        if (clearAll) {
            setClientType("");
            setIndustry("");
            setAlliance("");
            setLocation("");
            setEmployees("");
            setRevenue("");
            setAccount("");
            captureAboutClientDetails(1, "");
            captureAboutClientDetails(2, "");
            captureAboutClientDetails(3, "");
            captureAboutClientDetails(4, "");
            captureAboutClientDetails(5, "");
            captureAboutClientDetails('industry', "");
            captureAboutClientDetails('account', "");
            setClearAll(false);
        }
    }, [clearAll]);

    return (
        <>
            <div className="ms-Grid-row">
                <div className={`ms-Grid-col ms-sm12`}>
                    <p className={styles.headerStyle}>1. About client</p>
                </div>
                <Separator></Separator>
                <div className={styles.aligned_form}>
                    <label>Client type<span style={{ color: 'red' }}>*</span></label>
                    <TextField className={styles.textField}
                        styles={textFieldStyles}
                        placeholder="Enter client type"
                        value={clientType}
                        onChange={onClientTypeNewValue} />
                </div>

                <div className={styles.aligned_form}>
                    <label>Industry<span style={{ color: 'red' }}>*</span></label>
                    <Dropdown className={styles.dropdown}
                        styles={dropDownStyles}
                        placeholder="Find industry"
                        options={industryOptions}
                        defaultSelectedKey={industry}
                        onChange={(e, selectedOption) => {
                            captureAboutClientDetails(selectedOption.key, selectedOption.text);
                            setIndustry(String(selectedOption.key));
                        }} />
                </div>

                <div className={styles.aligned_form}>
                    <label>Alliance partner<span style={{ color: 'red' }}>*</span></label>
                    <TextField className={styles.textField}
                        styles={textFieldStyles}
                        placeholder="Enter Alliance partner"
                        value={alliance}
                        onChange={onAllianceNewValue} />
                </div>

                <div className={styles.aligned_form}>
                    <label>Client location<span style={{ color: 'red' }}>*</span></label>
                    <TextField className={styles.textField}
                        styles={textFieldStyles}
                        placeholder="Enter location"
                        value={location}
                        onChange={onLocationNewValue} />
                </div>

                <div className={styles.aligned_form}>
                    <label>Client size Number of employees<span style={{ color: 'red' }}>*</span></label>
                    <TextField className={styles.textField}
                        styles={textFieldStyles}
                        placeholder="Enter numbrer of employees"
                        value={employees}
                        onChange={onEmployeesNewValue} />
                </div>

                <div className={styles.aligned_form}>
                    <label>Client annual revenue<span style={{ color: 'red' }}>*</span></label>
                    <TextField className={styles.textField}
                        styles={textFieldStyles}
                        placeholder="Enter value in dollars"
                        value={revenue}
                        onChange={onRevenueNewValue} />
                </div>

                <div className={styles.aligned_form}>
                    <label>Client program account<span style={{ color: 'red' }}>*</span></label>
                    <Dropdown className={styles.dropdown}
                        styles={dropDownStyles}
                        placeholder="Find account"
                        options={accountOptions}
                        defaultSelectedKey={account}
                        onChange={(e, selectedOption) => {
                            captureAboutClientDetails(selectedOption.key, selectedOption.text);
                            setAccount(String(selectedOption.key));
                        }} />
                </div>
            </div>
        </>
    );
};

export default AboutClient;

