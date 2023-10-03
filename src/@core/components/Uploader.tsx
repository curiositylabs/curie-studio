// Installed by "react-uploader".
import { Uploader, UploadWidgetConfig } from "uploader";
import { UploadButton } from "react-uploader";
import Button from "./Button";
import { UploadFile } from "@mui/icons-material";
import { ButtonProps } from "@mui/material";

const UPLOADER_API_KEY = process.env.NEXT_PUBLIC_UPLOADER_API_KEY || "";

const uploader = Uploader({ apiKey: UPLOADER_API_KEY });

interface Props {
  options?: UploadWidgetConfig;
	setFiles?: (files: any) => void;
	buttonOptions?: ButtonProps
}

const FileUpload = (props: Props) => {
  const { options, setFiles, buttonOptions } = props;
	const buttonProps: ButtonProps = {
    variant: "contained",
    startIcon: <UploadFile />,
    ...buttonOptions,
  };
  return (
    <UploadButton
      uploader={uploader}
      options={options || {}}
      onComplete={setFiles}
    >
      {({ onClick }) => (
        <Button {...buttonProps} onClick={onClick}>
          Upload
        </Button>
      )}
    </UploadButton>
  );
};

export default FileUpload;
