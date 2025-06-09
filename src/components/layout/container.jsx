import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

export const Container = ({ className, children }) => {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4", className)}>
      {children}
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
