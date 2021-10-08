import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import styles from './DetailsForm.module.scss';
import { Separator, TextField } from 'office-ui-fabric-react';
import { textFieldStyles } from './DetailsForm.constants';

const AboutClient = (props: any) => {
    const { captureAdditionalInfoDetails, clearAll, setClearAll } = props;

    const [questionaire1, setQuestionaire1] = useState("");
    const [questionaire2, setQuestionaire2] = useState("");
    const [questionaire3, setQuestionaire3] = useState("");
    const [questionaire4, setQuestionaire4] = useState("");
    const [questionaire5, setQuestionaire5] = useState("");

    const onQuestionaire1NewValue = useCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newProp?: string) => {
            let key = 1;
            captureAdditionalInfoDetails(key, newProp || "");
            setQuestionaire1(newProp || "");
        },
        [],
    );

    const onQuestionaire2NewValue = useCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newProp?: string) => {
            let key = 2;
            captureAdditionalInfoDetails(key, newProp || "");
            setQuestionaire2(newProp || "");
        },
        [],
    );

    const onQuestionaire3NewValue = useCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newProp?: string) => {
            let key = 3;
            captureAdditionalInfoDetails(key, newProp || "");
            setQuestionaire3(newProp || "");
        },
        [],
    );

    const onQuestionaire4NewValue = useCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newProp?: string) => {
            let key = 4;
            captureAdditionalInfoDetails(key, newProp || "");
            setQuestionaire4(newProp || "");
        },
        [],
    );

    const onQuestionaire5NewValue = useCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newProp?: string) => {
            let key = 5;
            captureAdditionalInfoDetails(key, newProp || "");
            setQuestionaire5(newProp || "");
        },
        [],
    );

    useEffect(() => {
        if (clearAll) {
            setQuestionaire1("");
            setQuestionaire2("");
            setQuestionaire3("");
            setQuestionaire4("");
            setQuestionaire5("");
            captureAdditionalInfoDetails(1, "");
            captureAdditionalInfoDetails(2, "");
            captureAdditionalInfoDetails(3, "");
            captureAdditionalInfoDetails(4, "");
            captureAdditionalInfoDetails(5, "");
            setClearAll(false);
        }
    }, [clearAll]);

    return (
        <>
            <div className={`${styles.stackBorder} ms-Grid-row`}>
                <div className={`ms-Grid-col ms-sm12`}>
                    <p className={styles.headerStyle} style={{ marginBottom: '9px' }}>4. Additional information</p>
                </div>
                <Separator></Separator>
                <div className={`ms-Grid-col ms-sm12`}>
                    <label style={{ whiteSpace: 'nowrap', marginBottom: '10px', width: '100%' }}>Tell us about the client and why they are making this investment, why now? What do they hope it will achieve?</label>
                </div>
                <div className={`ms-Grid-col ms-sm12`}>
                    <TextField className={styles.questionaireTextfield}
                        styles={textFieldStyles}
                        value={questionaire1}
                        multiline rows={4}
                        onChange={onQuestionaire1NewValue} />
                </div>

                <div className={`ms-Grid-col ms-sm12`}>
                    <label style={{ whiteSpace: 'nowrap', marginBottom: '10px', width: '100%' }}>What other products were considered? Why did they choose this product?</label>
                </div>
                <div className={`ms-Grid-col ms-sm12`}>
                    <TextField className={styles.questionaireTextfield}
                        styles={textFieldStyles}
                        value={questionaire2}
                        multiline rows={4}
                        onChange={onQuestionaire2NewValue} />
                </div>

                <div className={`ms-Grid-col ms-sm12`}>
                    <label style={{ whiteSpace: 'nowrap', marginBottom: '10px', width: '100%' }}>What are the specific product/modules? What are the GT services being provided?</label>
                </div>
                <div className={`ms-Grid-col ms-sm12`}>
                <TextField className={styles.questionaireTextfield}
                        styles={textFieldStyles}
                        value={questionaire3}
                        multiline rows={4}
                        onChange={onQuestionaire3NewValue} />
                </div>

                <div className={`ms-Grid-col ms-sm12`}>
                    <label style={{ whiteSpace: 'nowrap', marginBottom: '10px', width: '100%' }}>How did the relationship between the client and the win materialize? Tell us the "Story".</label>
                </div>
                <div className={`ms-Grid-col ms-sm12`}>
                <TextField className={styles.questionaireTextfield}
                        styles={textFieldStyles}
                        value={questionaire4}
                        multiline rows={4}
                        onChange={onQuestionaire4NewValue} />
                </div>

                <div className={`ms-Grid-col ms-sm12`}>
                    <label style={{ whiteSpace: 'nowrap', marginBottom: '10px', width: '100%' }}>Who did GT compete with? Why did they choose GT? What set us apart?</label>
                </div>
                <div className={`ms-Grid-col ms-sm12`}>
                <TextField className={styles.questionaireTextfield}
                        styles={textFieldStyles}
                        value={questionaire5}
                        multiline rows={4}
                        onChange={onQuestionaire5NewValue} />
                </div>
            </div>
        </>
    );
};

export default AboutClient;

