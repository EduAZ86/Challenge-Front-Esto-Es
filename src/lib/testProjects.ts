import { IProjectResponse } from "@/types/project.types";

export const testProjects: IProjectResponse[] = [
    {
        _id: "1",
        projectName: "Project Alpha",
        projectDescription: "Development of a new feature for the application.",
        projectManager: {
            name: "Alice Johnson",
            email: "alice.johnson@example.com",
            ocupation: "Senior Developer",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        assingnedPerson: {
            name: "Bob Smith",
            email: "bob.smith@example.com",
            ocupation: "Frontend Developer",
            image: "https://randomuser.me/api/portraits/men/46.jpg"
        },
        projectStatus: "Iniciado",
        createdAt: new Date("2024-01-15T10:00:00Z"),
        updatedAt: new Date("2024-02-01T10:00:00Z")
    },
    {
        _id: "2",
        projectName: "Project Beta",
        projectDescription: "Redesign of the user interface for better usability.",
        projectManager: {
            name: "Carol White",
            email: "carol.white@example.com",
            ocupation: "UI/UX Designer",
            image: "https://randomuser.me/api/portraits/women/46.jpg"
        },
        assingnedPerson: {
            name: "David Brown",
            email: "david.brown@example.com",
            ocupation: "Backend Developer",
            image: "https://randomuser.me/api/portraits/men/47.jpg"
        },
        projectStatus: "En progreso",
        createdAt: new Date("2024-03-20T11:00:00Z"),
        updatedAt: new Date("2024-04-10T11:00:00Z")
    },
    {
        _id: "3",
        projectName: "Project Gamma",
        projectDescription: "Implementation of a new payment gateway.",
        projectManager: {
            name: "Emily Davis",
            email: "emily.davis@example.com",
            ocupation: "Product Manager",
            image: "https://randomuser.me/api/portraits/women/48.jpg"
        },
        assingnedPerson: {
            name: "Frank Wilson",
            email: "frank.wilson@example.com",
            ocupation: "Security Specialist",
            image: "https://randomuser.me/api/portraits/men/49.jpg"
        },
        projectStatus: "Finalizado",
        createdAt: new Date("2024-02-10T12:00:00Z"),
        updatedAt: new Date("2024-03-01T12:00:00Z")
    },
    {
        _id: "4",
        projectName: "Project Delta",
        projectDescription: "Upgrade of the database infrastructure.",
        projectManager: {
            name: "Grace Lee",
            email: "grace.lee@example.com",
            ocupation: "Database Administrator",
            image: "https://randomuser.me/api/portraits/women/50.jpg"
        },
        assingnedPerson: {
            name: "Henry Harris",
            email: "henry.harris@example.com",
            ocupation: "System Architect",
            image: "https://randomuser.me/api/portraits/men/51.jpg"
        },
        projectStatus: "Iniciado",
        createdAt: new Date("2024-05-05T09:00:00Z"),
        updatedAt: new Date("2024-06-01T09:00:00Z")
    },
    {
        _id: "5",
        projectName: "Project Epsilon",
        projectDescription: "Development of a new API for mobile applications.",
        projectManager: {
            name: "Ivy Martinez",
            email: "ivy.martinez@example.com",
            ocupation: "API Developer",
            image: "https://randomuser.me/api/portraits/women/52.jpg"
        },
        assingnedPerson: {
            name: "Jack Robinson",
            email: "jack.robinson@example.com",
            ocupation: "Mobile Developer",
            image: "https://randomuser.me/api/portraits/men/53.jpg"
        },
        projectStatus: "En progreso",
        createdAt: new Date("2024-04-15T08:00:00Z"),
        updatedAt: new Date("2024-05-20T08:00:00Z")
    },
    {
        _id: "6",
        projectName: "Project Zeta",
        projectDescription: "Migration of the application to a new cloud provider.",
        projectManager: {
            name: "John Doe",
            email: "john.doe@example.com",
            ocupation: "Cloud Engineer",
            image: "https://randomuser.me/api/portraits/men/54.jpg"
        },
        assingnedPerson: {
            name: "Jane Smith",
            email: "jane.smith@example.com",
            ocupation: "Cloud Architect",
            image: "https://randomuser.me/api/portraits/women/55.jpg"
        },
        projectStatus: "Finalizado",
        createdAt: new Date("2024-07-01T10:00:00Z"),
        updatedAt: new Date("2024-08-01T10:00:00Z")
    },
    {
        _id: "7",
        projectName: "Project Eta",
        projectDescription: "Implementation of a new feature for analytics.",
        projectManager: {
            name: "Kathy Green",
            email: "kathy.green@example.com",
            ocupation: "Data Analyst",
            image: "https://randomuser.me/api/portraits/women/56.jpg"
        },
        assingnedPerson: {
            name: "Leo Walker",
            email: "leo.walker@example.com",
            ocupation: "Software Engineer",
            image: "https://randomuser.me/api/portraits/men/57.jpg"
        },
        projectStatus: "Iniciado",
        createdAt: new Date("2024-06-15T11:00:00Z"),
        updatedAt: new Date("2024-07-01T11:00:00Z")
    },
    {
        _id: "8",
        projectName: "Project Theta",
        projectDescription: "Redesign of the company website.",
        projectManager: {
            name: "Laura Taylor",
            email: "laura.taylor@example.com",
            ocupation: "Web Designer",
            image: "https://randomuser.me/api/portraits/women/58.jpg"
        },
        assingnedPerson: {
            name: "Mike Anderson",
            email: "mike.anderson@example.com",
            ocupation: "Frontend Developer",
            image: "https://randomuser.me/api/portraits/men/59.jpg"
        },
        projectStatus: "En progreso",
        createdAt: new Date("2024-03-10T10:00:00Z"),
        updatedAt: new Date("2024-04-15T10:00:00Z")
    },
    {
        _id: "9",
        projectName: "Project Iota",
        projectDescription: "Integration of new third-party services.",
        projectManager: {
            name: "Nancy Thomas",
            email: "nancy.thomas@example.com",
            ocupation: "Integration Specialist",
            image: "https://randomuser.me/api/portraits/women/60.jpg"
        },
        assingnedPerson: {
            name: "Oscar Martinez",
            email: "oscar.martinez@example.com",
            ocupation: "Backend Developer",
            image: "https://randomuser.me/api/portraits/men/61.jpg"
        },
        projectStatus: "Finalizado",
        createdAt: new Date("2024-08-20T12:00:00Z"),
        updatedAt: new Date("2024-09-15T12:00:00Z")
    },
    {
        _id: "10",
        projectName: "Project Kappa",
        projectDescription: "Development of a new internal tool.",
        projectManager: {
            name: "Paul Robinson",
            email: "paul.robinson@example.com",
            ocupation: "Software Engineer",
            image: "https://randomuser.me/api/portraits/men/62.jpg"
        },
        assingnedPerson: {
            name: "Quinn Clark",
            email: "quinn.clark@example.com",
            ocupation: "Product Owner",
            image: "https://randomuser.me/api/portraits/women/63.jpg"
        },
        projectStatus: "Iniciado",
        createdAt: new Date("2024-09-10T14:00:00Z"),
        updatedAt: new Date("2024-10-01T14:00:00Z")
    }
];
