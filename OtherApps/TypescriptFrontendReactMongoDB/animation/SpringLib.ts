interface SpringLibProps {
  visible?: boolean;
}

function SpringLib(props: SpringLibProps) {
  const { visible } = props;
  const containerAnimation = {
    opacity: {
      opacity: visible ? 1 : 0,
      config: { duration: 100 },
      from: {
        opacity: 0,
      },
    },
  };
  return { containerAnimation };
}
export default SpringLib;
