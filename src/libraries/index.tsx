import { PropsWithChildren } from 'react';
import { RecoilRoot } from 'recoil';
import ReactQuerySetting from '@/libraries/reactQuery/ReactQuerySetting';

export default function AppRegister({ children }: PropsWithChildren) {
  return (
    <ReactQuerySetting>
      <RecoilRoot>{children}</RecoilRoot>
    </ReactQuerySetting>
  );
}
