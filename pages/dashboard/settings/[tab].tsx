import React, { useMemo } from "react";
import { useRouter } from "next/router";
import PersonalInformation from "fragments/settings/personalInformation";
import ChangePassword from "fragments/settings/changePassword";
import VerifyAccount from "fragments/settings/verifyAccount";

const SettingsTab = () => {
    const router = useRouter();
    const activeTab = router.query.tab || "personalnformation";

    const stateEvents = useMemo(() => {
        if (activeTab === "personalInformation") return <PersonalInformation />;
        else if (activeTab === "changePassword") return <ChangePassword />;
        else if (activeTab === "verifyAccount") return <VerifyAccount />;

        return <PersonalInformation />
      }, [activeTab]);
    
      return (
        <div>
          {stateEvents}
        </div>
      )
}

export default SettingsTab;