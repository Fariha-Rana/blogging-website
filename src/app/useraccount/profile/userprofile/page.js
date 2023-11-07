import ProfileCard from "@/components/PofileCard";

const ProfilePage = () => {
    return (
        <div className="w-full max-w-xl mx-auto py-8 flex flex-wrap gap-y-6 m-2">
            <h1 className=" w-full flex gap-x-4 text-center  justify-center">
                <span className="text-3xl font-bold flex">My Account</span>
            </h1>
            <ProfileCard />
        </div>
    );
}

export default ProfilePage;