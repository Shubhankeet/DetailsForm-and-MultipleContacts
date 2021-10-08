import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import styles from './DetailsForm.module.scss';
import { Separator, TextField } from 'office-ui-fabric-react';
import { textFieldStyles } from './DetailsForm.constants';

const AboutClient = (props: any) => {
    const { captureCompetitionDetails, clearAll, setClearAll } = props;

    const [gtComp, setGtComp] = useState("");
    const [pursuitTeam, setPursuitTeam] = useState("");
    const [dealAmt, setDealAmt] = useState("");

    const onGTNewValue = useCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newProp?: string) => {
            let key = 1;
            captureCompetitionDetails(key, newProp || "");
            setGtComp(newProp || "");
        },
        [],
    );

    const onPursuitNewValue = useCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newProp?: string) => {
            let key = 2;
            captureCompetitionDetails(key, newProp || "");
            setPursuitTeam(newProp || "");
        },
        [],
    );

    const onDealAmtNewValue = useCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newProp?: string) => {
            let key = 3;
            captureCompetitionDetails(key, newProp || "");
            setDealAmt(newProp || "");
        },
        [],
    );

    useEffect(() => {
        if (clearAll) {
            setGtComp("");
            setPursuitTeam("");
            setDealAmt("");
            captureCompetitionDetails(1, "");
            captureCompetitionDetails(2, "");
            captureCompetitionDetails(3, "");
            setClearAll(false);
        }
    }, [clearAll]);

    return (
        <>
            <div className={`${styles.stackBorder} ms-Grid-row`}>
                <div className={`ms-Grid-col ms-sm12`}>
                    <p className={styles.headerStyle} style={{ marginBottom: '9px' }}>2. Competition, Pursuit, Deal amount</p>
                </div>
                <Separator></Separator>
                <div className={styles.aligned_form}>
                    <label>Grant Thornton Competition<span style={{ color: 'red' }}>*</span></label>
                    <TextField className={styles.textField}
                        styles={textFieldStyles}
                        placeholder="Enter name"
                        value={gtComp}
                        onChange={onGTNewValue} />
                </div>

                <div className={styles.aligned_form}>
                    <label>Pursuit Team (Name and Title)</label>
                    <TextField className={styles.textField}
                        styles={textFieldStyles}
                        placeholder="Enter name and title"
                        value={pursuitTeam}
                        onChange={onPursuitNewValue} />
                </div>

                <div className={styles.aligned_form}>
                    <label>Deal Amount (partner figure)</label>
                    <TextField className={styles.textField}
                        styles={textFieldStyles}
                        placeholder="Enter Amount in dolllars"
                        value={dealAmt}
                        onChange={onDealAmtNewValue} />
                </div>
            </div>
        </>
    );
};

export default AboutClient;

