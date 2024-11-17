import client from "@/apis";

export type UserInformationResponse = {
  code: string;
  message: string;
  result: Record<string, unknown>;
};

export type UserInformationRequest = {
  nickname: string;
  gender: string;
  age: number;
  minPrice: number;
  maxPrice: number;
  regionPreferences: { preferenceRegion: string }[];
  typePreferences: { preferenceType: string }[];
  categoryPreferences: { preferenceCategory: string }[];
};

export const UserInformationSubmit = async (userInfo: UserInformationRequest) => {
  try {
    const response = await client.post<UserInformationResponse>(
      `/members`,
      userInfo
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};