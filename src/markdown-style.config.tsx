const H1 = ({ children }) => <h1 className="text-4xl font-bold mb-4">{children}</h1>
const H2 = ({ children }) => <h2 className="text-2xl mb-4 font-bold">{children}</h2>
const H3 = ({ children }) => <h3 className="text-xl mb-4 font-bold">{children}</h3>
const P = ({ children }) => <p className="mb-4">{children}</p>
const UL = ({ children }) => <ul className="mb-4 list-disc" >{children}</ul>
const OL = ({ children }) => <ol className="mb-4 list-decimal" >{children}</ol>

export const mainContentOptions = {
    overrides: {
        h1: H1,
        p: P,
        h2: H2,
        h3: H3,
        ul: UL,
        ol: OL
    }
}