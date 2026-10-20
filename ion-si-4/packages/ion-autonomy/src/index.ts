export interface ExtensionStatus {
  available: false;
  message: string;
}

export const extensionStatus: ExtensionStatus = {
  available: false,
  message: "No extension implementation is included in this sample."
};