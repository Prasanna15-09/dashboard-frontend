import {Subject} from "@/types";

export const Mock_Subjects : Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "Computer Science",
        description: "Covers fundamental concepts of computing including algorithms, programming basics, data structures, and problem-solving techniques.",
        createdAt : new Date().toISOString(),
    },
    {
        id: 2,
        code: "EE205",
        name: "Digital Electronics",
        department: "Electrical Engineering",
        description: "Introduces digital logic design, Boolean algebra, combinational and sequential circuits, and practical applications in modern electronics.",
        createdAt : new Date().toISOString(),
    },
    {
        id: 3,
        code: "ME310",
        name: "Thermodynamics",
        department: "Mechanical Engineering",
        description: "Focuses on the principles of energy, heat transfer, laws of thermodynamics, and their applications in mechanical systems.",
        createdAt : new Date().toISOString(),
    },
    {
        id: 4,
        code: "BA220",
        name: "Principles of Management",
        department: "Business Administration",
        description: "Explores core management concepts including planning, organizing, leadership, decision-making, and organizational behavior.",
        createdAt : new Date().toISOString(),
    },
];
