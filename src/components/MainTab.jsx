import NoProject from "./NoProject"
import CreateProject from "./CreateProject"
import ViewProject from "./ViewProject";
export default function MainTab() {
    const showProject = true;
    return (
        <>
            {!showProject && <NoProject />}
            {showProject && <CreateProject />}
            {!showProject && <ViewProject />}
        </>
        
    )
}