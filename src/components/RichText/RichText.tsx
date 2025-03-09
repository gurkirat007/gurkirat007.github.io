import DOMPurify from "dompurify";
interface RichTextProps {
  htmlContent: string | undefined;
  className: string;
}

export default function RichText(
  props: RichTextProps,
) {
  const {
    htmlContent,
    className = "",
  } = props;
  return (
    <div
      className={`rich-text ${className}`}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(
          htmlContent ?? "",
        ),
      }}
    />
  );
}
