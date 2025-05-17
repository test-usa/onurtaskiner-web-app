import PlatformSettings from "@/components/platformSetting/PlatformSetting";
import PrivacyPolicy from "@/components/platformSetting/PrivacyPolicy";
import Wrapper from "@/components/wrapper/wrapper";

const partformSettingPage = () => {
  return (
    <Wrapper>
      <PlatformSettings />
      <PrivacyPolicy />
    </Wrapper>
  );
};

export default partformSettingPage;
