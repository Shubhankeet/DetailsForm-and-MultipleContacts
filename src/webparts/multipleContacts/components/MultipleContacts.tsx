import * as React from 'react';
import styles from './MultipleContacts.module.scss';
import { iconClass, PersonaStyles, stackItemCard, stackTokens } from './MultipleContacts.constants';
import { Web } from "sp-pnp-js";
import { sp } from "@pnp/sp/presets/all";
import { Icon, Persona, PersonaPresence, PersonaSize, Separator, Stack } from 'office-ui-fabric-react';

const MultipleContacts = (props: any) => {
  const { context, siteUrl } = props;

  const web = new Web(siteUrl);
  sp.setup(context);

  const handleCall = () => {
    window.location.href = "skype:echo123?call";
  };

  const handleChat = () => {
    window.location.href = "skype:echo123?call";
  };

  const handleProfile = () => {
    window.location.href = "skype:echo123?userinfo";
  };

  return (
    <>
      <Stack horizontal tokens={stackTokens}>
        <Stack.Item styles={stackItemCard}>
          <div className={styles.card}>
            <div className={styles.smallText}>Public Sector</div>
            <div className={styles.smallIcon}>&#9733;</div>
            <Persona style={{ marginLeft: '28%' }}
              size={PersonaSize.size120}
              presence={PersonaPresence.away}
              imageAlt="status is away"
              styles={PersonaStyles}
            />
            <p className={styles.header}>Denson, Hunter</p>
            <p className={styles.title}>Recruiting Senior Associate</p>
            <Icon
              iconName="DeclineCall"
              className={iconClass}
              onClick={handleCall}
              title="Call"
            />
            <Icon
              iconName="chat"
              className={iconClass}
              onClick={handleChat}
              title="Chat"
            />
            <Icon
              iconName="mail"
              className={iconClass}
              onClick={handleChat}
              title="Chat"
            />
            <p className={styles.about}>Ask me About</p>
            <p className={styles.title}>CLEARR Performance- Strategy, CLEARRy1 Culture Journey, Coaching Support, Compensation, General HR, Talent Management Strategy</p>
            <Separator />
            <p className={styles.viewProfile} onClick={handleProfile}>View Profile</p>
          </div>
        </Stack.Item>

        <Stack.Item styles={stackItemCard}>
          <div className={styles.card}>
            <div className={styles.smallText}>Public Sector</div>
            <div className={styles.smallIcon}>&#9733;</div>
            <Persona style={{ marginLeft: '28%' }}
              size={PersonaSize.size120}
              presence={PersonaPresence.online}
              imageAlt="status is online"
              styles={PersonaStyles}
            />
            <p className={styles.header}>Denson, Hunter</p>
            <p className={styles.title}>Recruiting Senior Associate</p>
            <Icon
              iconName="DeclineCall"
              className={iconClass}
              onClick={handleCall}
              title="Call"
            />
            <Icon
              iconName="chat"
              className={iconClass}
              onClick={handleChat}
              title="Chat"
            />
            <Icon
              iconName="mail"
              className={iconClass}
              onClick={handleChat}
              title="Chat"
            />
            <p className={styles.about}>Ask me About</p>
            <p className={styles.title}>CLEARR Performance- Strategy, CLEARRy1 Culture Journey, Coaching Support, Compensation, General HR, Talent Management Strategy</p>
            <Separator />
            <p className={styles.viewProfile} onClick={handleProfile}>View Profile</p>
          </div>
        </Stack.Item>

        <Stack.Item styles={stackItemCard}>
          <div className={styles.card}>
            <div className={styles.smallText}>Public Sector</div>
            <div className={styles.smallIcon}>&#9733;</div>
            <Persona style={{ marginLeft: '28%' }}
              size={PersonaSize.size120}
              presence={PersonaPresence.busy}
              imageAlt="status is busy"
              styles={PersonaStyles}
            />
            <p className={styles.header}>Denson, Hunter</p>
            <p className={styles.title}>Recruiting Senior Associate</p>
            <Icon
              iconName="DeclineCall"
              className={iconClass}
              onClick={handleCall}
              title="Call"
            />
            <Icon
              iconName="chat"
              className={iconClass}
              onClick={handleChat}
              title="Chat"
            />
            <Icon
              iconName="mail"
              className={iconClass}
              onClick={handleChat}
              title="Chat"
            />
            <p className={styles.about}>Ask me About</p>
            <p className={styles.title}>CLEARR Performance- Strategy, CLEARRy1 Culture Journey, Coaching Support, Compensation, General HR, Talent Management Strategy</p>
            <Separator />
            <p className={styles.viewProfile} onClick={handleProfile}>View Profile</p>
          </div>
        </Stack.Item>
      </Stack>

    </>
  );
};

export default MultipleContacts;
