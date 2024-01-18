import {
    Card,
    Typography,
} from "@material-tailwind/react";

interface Member {
    name: string;
    role: string;
}

const Members: Member[] = [
    { "name": "Saeed Ahmed", "role": "Voorzitter" },
    { "name": "Amanat Kayani Mohammad", "role": "Secretaris" },
    { "name": "Sohail Joya", "role": "Penningmeester" },
]

const MemberCard = ({ name, role }: Member): JSX.Element => {
    return (
        <Card color="transparent" shadow={false} className="w-full max-w-[26rem] mx-4">
            <div className="flex w-full flex-col gap-0.5 border border-stone-600 rounded p-8">
                <div className="flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                        {name}
                    </Typography>
                </div>
                <div className="flex items-center justify-between">
                    <Typography color="blue-gray">
                        {role}
                    </Typography>
                </div>
            </div>
        </Card>
    )
}

const BoardMembers = (): JSX.Element => {
    return (
        <div className="text-center">
            <h2 className="sm:text-5xl text-2xl font-bold mx-1 mt-52">
                MAAK KENNIS MET HET BESTUUR
            </h2>
            <div className="flex mt-28 mx-auto">
                {Members.map((member, index) => (
                    <MemberCard key={index} name={member.name} role={member.role} />
                ))}
            </div>

        </div>
    )
}

export default BoardMembers;
