import { SectionWrapper } from "./section-wrapper"
import {
  HomeIcon,
  SearchIcon,
  SettingsIcon,
  UserIcon,
  MailIcon,
  BellIcon,
  HeartIcon,
  StarIcon,
  TrashIcon,
  PenIcon,
  FolderIcon,
  FileIcon,
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
  GlobeIcon,
  LockIcon,
  UnlockIcon,
  EyeIcon,
  EyeOffIcon,
  CopyIcon,
  CheckIcon,
  XIcon,
  PlusIcon,
  MinusIcon,
  ChevronRightIcon,
  ArrowUpIcon,
  DownloadIcon,
  UploadIcon,
} from "lucide-react"

const ICONS = [
  { Icon: HomeIcon, name: "Home" },
  { Icon: SearchIcon, name: "Search" },
  { Icon: SettingsIcon, name: "Settings" },
  { Icon: UserIcon, name: "User" },
  { Icon: MailIcon, name: "Mail" },
  { Icon: BellIcon, name: "Bell" },
  { Icon: HeartIcon, name: "Heart" },
  { Icon: StarIcon, name: "Star" },
  { Icon: TrashIcon, name: "Trash" },
  { Icon: PenIcon, name: "Pen" },
  { Icon: FolderIcon, name: "Folder" },
  { Icon: FileIcon, name: "File" },
  { Icon: CalendarIcon, name: "Calendar" },
  { Icon: ClockIcon, name: "Clock" },
  { Icon: MapPinIcon, name: "MapPin" },
  { Icon: PhoneIcon, name: "Phone" },
  { Icon: GlobeIcon, name: "Globe" },
  { Icon: LockIcon, name: "Lock" },
  { Icon: UnlockIcon, name: "Unlock" },
  { Icon: EyeIcon, name: "Eye" },
  { Icon: EyeOffIcon, name: "EyeOff" },
  { Icon: CopyIcon, name: "Copy" },
  { Icon: CheckIcon, name: "Check" },
  { Icon: XIcon, name: "X" },
  { Icon: PlusIcon, name: "Plus" },
  { Icon: MinusIcon, name: "Minus" },
  { Icon: ChevronRightIcon, name: "ChevronRight" },
  { Icon: ArrowUpIcon, name: "ArrowUp" },
  { Icon: DownloadIcon, name: "Download" },
  { Icon: UploadIcon, name: "Upload" },
]

const COLOR_VARIANTS = [
  { label: "foreground", className: "text-foreground" },
  { label: "muted-foreground", className: "text-muted-foreground" },
  { label: "primary", className: "text-primary" },
  { label: "destructive", className: "text-destructive" },
]

export function IconsSection() {
  return (
    <SectionWrapper
      id="icons"
      title="Icons"
      description="Lucide React icons at different sizes and color token inheritance."
    >
      <div className="space-y-10">
        {/* Icon Grid */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Icon Grid (24px)
          </h3>
          <div className="grid grid-cols-5 gap-4 sm:grid-cols-6 md:grid-cols-10">
            {ICONS.map(({ Icon, name }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-1.5 text-center"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted/50">
                  <Icon className="size-5" />
                </div>
                <span className="text-[10px] text-muted-foreground">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Size Scale
          </h3>
          <div className="flex items-end gap-6">
            {[
              { size: "size-4", label: "16px" },
              { size: "size-5", label: "20px" },
              { size: "size-6", label: "24px" },
              { size: "size-8", label: "32px" },
            ].map(({ size, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <StarIcon className={size} />
                <span className="font-mono text-xs text-muted-foreground">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Color Inheritance */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Color Inheritance
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {COLOR_VARIANTS.map(({ label, className }) => (
              <div key={label} className="space-y-2">
                <p className="font-mono text-xs text-muted-foreground">
                  {label}
                </p>
                <div className={`flex gap-3 ${className}`}>
                  <HomeIcon className="size-5" />
                  <MailIcon className="size-5" />
                  <BellIcon className="size-5" />
                  <SettingsIcon className="size-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
