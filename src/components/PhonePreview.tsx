import { CaseColor } from "@prisma/client"
import { useRef, useState, useEffect } from "react"
import { AspectRatio } from "./ui/aspect-ratio"
import { cn } from "@/lib/utils"

const PhonePreview = ({ croppedImageUrl, color }: { croppedImageUrl: string, color: CaseColor }) => {
    const ref = useRef<HTMLDivElement>(null)

    const [renderedDimensions, setRenderedDimensions] = useState({
        height: 0,
        width: 0,
    })
    let caseBackgroundColor = "bg-zinc-950"
    switch (color) {
        case "blue":
            caseBackgroundColor = "bg-blue-950"
            break;
        case "red":
            caseBackgroundColor = "bg-rose-950"
            break;
        case "black":
            caseBackgroundColor = "bg-zinc-950"
            break;
        case "green":
            caseBackgroundColor = "bg-green-950"
            break;
    }

    // Use effect to set dimensions once the ref is available
    useEffect(() => {
        if (ref.current) {
            const { clientWidth, clientHeight } = ref.current
            setRenderedDimensions({
                height: clientHeight,
                width: clientWidth,
            })
        }
    }, [])

    console.log(renderedDimensions)  // Debugging log to check dimensions

    return (
        <AspectRatio ref={ref} ratio={3000 / 2001} className="relative">
            <div
                className="absolute z-19 scale-[1.0352]"
                style={{
                    left: renderedDimensions.width / 2 - renderedDimensions.width / (1216 / 121),
                    top: renderedDimensions.height / 6.22,
                }}
            >
                <img
                    width={renderedDimensions.width / (3000 / 637)}
                    className={cn(
                        "phone-skew relative z-20 rounded-t-[15px] rounded-b-[10px] md:rounded-t-[30px] md:rounded-b-[20px]",
                        caseBackgroundColor
                    )}
                    src={croppedImageUrl}
                />
            </div>
            <div className="relative h-full w-full">
                <img
                    alt="phone"
                    src="/clearphone.png"
                    className="pointer-events-none h-full w-full antialiased rounded-md"
                />
            </div>
        </AspectRatio>
    )
}

export default PhonePreview
