
export const Skills = () => {
  return (
    <section className="bg-primary p-10" id="skills">
        <h1 className="text-white text-4xl text-center">Skills<span className="text-default">.</span></h1>
        <div className="md:p-5">
          <SkillHeader>Web</SkillHeader>
          <SkillList>
            <SkillItem>HTML5</SkillItem>
            <SkillItem>CSS3</SkillItem>
            <SkillItem>JavaScript</SkillItem>
            <SkillItem>JSX</SkillItem>
            <SkillItem>React</SkillItem>
            <SkillItem>JSON</SkillItem>
            <SkillItem>Tailwinds CSS</SkillItem>
            <SkillItem>Git/GitHub</SkillItem>
          </SkillList>
          <SkillHeader>Industrial Automation</SkillHeader>
          <SkillList>
            <SkillItem>Structured Text</SkillItem>
            <SkillItem>Ladder Logic</SkillItem>
            <SkillItem>Function Block Diagrams</SkillItem>
            <SkillItem>Sequential Function Charts</SkillItem>
            <SkillItem>High Performance HMI Design</SkillItem>
          </SkillList>
          <SkillHeader>Corperate</SkillHeader>
          <SkillList>
            <SkillItem>PowerApps</SkillItem>
            <SkillItem>SharePoint</SkillItem>
            <SkillItem>PowerBi</SkillItem>
          </SkillList>
          </div>
    </section>
  )
}

const SkillHeader = ({children}) =>  {
  return(
    <h1 className="text-white text-xl">{children}</h1>
  )
}

const SkillList = ({children}) =>  {
  return(
    <ul className="my-2">{children}</ul>
  )
}

const SkillItem = ({children}) =>  {
  return(
    <li className="inline-block px-2 py-1 m-1 text-primary bg-white rounded-sm">{children}</li>
  )
}
