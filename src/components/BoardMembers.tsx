
import { Card, Typography } from "@material-tailwind/react";
import { FaUser } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { BsCoin } from 'react-icons/bs';

interface Member {
    name: string;
    role: string;
    icon: JSX.Element;
}

const Members: Member[] = [
    { 
        name: "Saeed Ahmed", 
        role: "Voorzitter",
        icon: <FaUser className="w-12 h-12 text-blue-700" />
    },
    { 
        name: "Amanat Kayani Mohammad", 
        role: "Secretaris",
        icon: <HiMail className="w-12 h-12 text-green-600" />
    },
    { 
        name: "Sohail Joya", 
        role: "Penningmeester",
        icon: <BsCoin className="w-12 h-12 text-blue-400" />
    },
];

const MemberCard = ({ name, role, icon }: Member): JSX.Element => {
    return (
        <Card color="transparent" shadow={false} className="w-full max-w-[18rem] mx-4">
            <div className="flex w-full flex-col items-center gap-4 border border-gray-200 rounded-lg p-8 bg-white">
                <div className="flex items-center justify-center">
                    {icon}
                </div>
                <div className="text-center">
                    <Typography variant="h5" color="blue-gray" className="mb-1">
                        {name}
                    </Typography>
                    <Typography color="gray" className="font-normal">
                        {role}
                    </Typography>
                </div>
            </div>
        </Card>
    );
};

const BoardMembers = (): JSX.Element => {
    return (
        <div className="text-center">
            <h2 className="text-5xl font-bold mb-16">
                MAAK KENNIS MET HET BESTUUR
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
                {Members.map((member, index) => (
                    <MemberCard key={index} {...member} />
                ))}
            </div>
        </div>
    );
};

export default BoardMembers;
