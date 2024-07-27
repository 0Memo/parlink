interface EventInfo {
    timeText: string;
    event: {
        title?: string;
    };
}

interface RenderEventContentProps {
    eventInfo: EventInfo;
}

export default function RenderEventContent({ eventInfo }: RenderEventContentProps) {
    const { timeText, event } = eventInfo;

    return (
        <span className='flex flex-col text-xs text-white w-72 py-1 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-400 relative inline-block my-2'>
            <span className='relative text-white flex flex-col'>
                <b>{timeText}</b>
                <i className="truncate break-all sm:break-normal w-28 sm:w-full">{event?.title}</i>
            </span>
        </span>
    );
}