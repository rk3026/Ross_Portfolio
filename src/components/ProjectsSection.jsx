import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Touhou Fangame",
        description: "A bullet-hell video game based on the Touhou Series, written in C# using the Monogame engine.",
        image: "/projects/TouhouFangame.png",
        tags: ["C#, Monogame"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Graph Theorist Sketchpad",
        description: "A graph sketching application allowing users to create graphs and analyze their information.",
        image: "/projects/GraphTheoristsSketchpad.png",
        tags: ["C#, WPF"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "Comper",
        description: "A website for hobbyists to anonymously host competitions and discuss in forums.",
        image: "/projects/Comper.png",
        tags: ["React", "Node.js", "JavaScript/CSS"],
        demoUrl: "#",
        githubUrl: "#",
    },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                        href={project.demoUrl}
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        target="_blank"
                                        >
                                            <ExternalLink size={20}/>
                                        </a>
                                        <a
                                        href={project.githubUrl}
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        target="_blank"
                                        >
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    href="https://github.com/rk3026"
                    target="_blank"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>

            </div>
        </section>
    )
}