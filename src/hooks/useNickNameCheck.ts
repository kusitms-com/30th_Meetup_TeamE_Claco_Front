import client from "@/apis";

export type NickNameCheckResponse = {
  code: string;
  message: string;
};

export const nickNameCheck = async (nickName: string) => {
  const response = await client.get<NickNameCheckResponse>(
    `/members/check-nickname?nickname=${nickName}`
  );
  return response.data;
};