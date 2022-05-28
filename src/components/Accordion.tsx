const Accordion = ({ message, ...rest }: { message: string }) => {
  return <div {...rest}>Accordion component {message}</div>;
};

export { Accordion };
