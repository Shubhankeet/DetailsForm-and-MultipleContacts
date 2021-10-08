import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import styles from './DetailsForm.module.scss';
import { Separator, TextField } from 'office-ui-fabric-react';
import { textFieldStyles } from './DetailsForm.constants';

const AboutClient = (props: any) => {
    const { captureContactStatusDetails, clearAll, setClearAll } = props;

    const [contact, setContact] = useState("");

    const onContactNewValue = useCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newProp?: string) => {
            let key = 1;
            captureContactStatusDetails(key, newProp || "");
            setContact(newProp || "");
        },
        [],
    );

    useEffect(() => {
        if (clearAll) {
            setContact("");
            captureContactStatusDetails(1, "");
            setClearAll(false);
        }
    }, [clearAll]);

    return (
        <>
            <div className={`${styles.stackBorder} ms-Grid-row`}>
                <div className={`ms-Grid-col ms-sm12`}>
                    <p className={styles.headerStyle} style={{ marginBottom: '9px' }}>5. Contact, Status</p>
                </div>
                <Separator></Separator>
                <div className={styles.aligned_form}>
                    <label>Contact/engagement partner<span style={{ color: 'red' }}>*</span></label>
                    <TextField className={styles.textField}
                        styles={textFieldStyles}
                        placeholder="Enter name"
                        value={contact}
                        onChange={onContactNewValue} />
                </div>
            </div>
        </>
    );
};

export default AboutClient;

