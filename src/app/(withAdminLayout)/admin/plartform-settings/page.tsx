import PlatformSettings from "@/components/platformSetting/PlatformSetting";
import PrivacyPolicy from "@/components/platformSetting/PrivacyPolicy";
import Wrapper from "@/components/wrapper/wrapper";

const partformSettingPage = () => {
  return (
    <Wrapper>

      <div>
     <PlatformSettings/>
     <PrivacyPolicy/>
    </div>
    </Wrapper>
  );
};

export default partformSettingPage;
