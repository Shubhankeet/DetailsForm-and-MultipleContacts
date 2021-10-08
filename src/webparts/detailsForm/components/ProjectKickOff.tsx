import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import styles from './DetailsForm.module.scss';
import { Separator, TextField } from 'office-ui-fabric-react';
import { textFieldStyles } from './DetailsForm.constants';

const AboutClient = (props: any) => {
    const { captureKickOffDetails, clearAll, setClearAll } = props;

    const [projectKickOff, setProjectKickOff] = useState("");
    const [target, setTarget] = useState("");

    const onProjectKickOffNewValue = useCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newProp?: string) => {
            let key = 1;
            captureKickOffDetails(key, newProp || "");
            setProjectKickOff(newProp || "");
        },
        [],
    );

    const onTargetLiveNewValue = useCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newProp?: string) => {
            let key = 2;
            captureKickOffDetails(key, newProp || "");
            setTarget(newProp || "");
        },
        [],
    );

    useEffect(() => {
        if (clearAll) {
            setProjectKickOff("");
            setTarget("");
            captureKickOffDetails(1, "");
            captureKickOffDetails(2, "");
            setClearAll(false);
        }
    }, [clearAll]);

    return (
        <>
            <div className={`${styles.stackBorder} ms-Grid-row`}>
                <div className={`ms-Grid-col ms-sm12`}>
                    <p className={styles.headerStyle} style={{ marginBottom: '9px' }}>3. Kick-off and Go-live</p>
                </div>
                <Separator></Separator>
                <div className={styles.aligned_form}>
                    <label>Project kickoff date<span style={{ color: 'red' }}>*</span></label>
                    <TextField className={styles.textField}
                        styles={textFieldStyles}
                        placeholder="Enter name"
                        value={projectKickOff}
                        onChange={onProjectKickOffNewValue} />
                </div>

                <div className={styles.aligned_form}>
                    <label>Target go-live date<span style={{ color: 'red' }}>*</span></label>
                    <TextField className={styles.textField}
                        styles={textFieldStyles}
                        placeholder="Enter Amount in dolllars"
                        value={target}
                        onChange={onTargetLiveNewValue} />
                </div>
            </div>
        </>
    );
};

export default AboutClient;

