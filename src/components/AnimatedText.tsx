import { motion } from "framer-motion";

interface Line {
  text: string;
  className?: string;
}

interface AnimatedTextProps {
  lines: Line[];
  inline?: boolean;
}

export const AnimatedText = ({ lines, inline = false }: AnimatedTextProps) => {
  const Wrapper = inline ? motion.span : motion.div;
  const LineWrapper = inline ? "span" : "div";

  return (
    <Wrapper
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={inline ? "inline" : ""}
    >
      {lines.map((line, lineIndex) => (
        <LineWrapper
          key={lineIndex}
          className={
            inline
              ? `inline ${line.className || ""}`
              : `block overflow-visible ${line.className || ""}`
          }
        >
          {line.text.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block whitespace-nowrap">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  className="inline-block"
                  initial={{
                    opacity: 0,
                    filter: "blur(8px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    filter: "blur(0px)",
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.2,
                    delay:
                      lineIndex * 1.2 + (wordIndex * 10 + charIndex) * 0.04,
                  }}
                >
                  {char}
                </motion.span>
              ))}

              {/* space after word */}
              <span>&nbsp;</span>
            </span>
          ))}
        </LineWrapper>
      ))}
    </Wrapper>
  );
};
