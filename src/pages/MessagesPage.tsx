import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Search,
  Settings,
  MessageSquare,
  Users,
  Archive,
  Tag,
  Send,
  Paperclip,
  Mic,
  MoreVertical,
  Phone,
  Video,
  Info,
  X,
  ChevronRight,
  User,
  Mail,
  Building,
  MapPin,
  Facebook,
  Twitter,
  Linkedin
} from 'lucide-react';

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
}

interface Contact {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unread?: number;
  avatar?: string;
  channel: string;
  tags?: string[];
}

const MessagesPage = () => {
  const [selectedContact, setSelectedContact] = useState<string>('1');
  const [showContactInfo, setShowContactInfo] = useState(true);
  const [messageInput, setMessageInput] = useState('');
  const [activeSection, setActiveSection] = useState('all');

  const contacts: Contact[] = [
    {
      id: '1',
      name: 'Klaus Crawley',
      lastMessage: 'Can we use Captain here to automate these queries?',
      timestamp: '3m • 25m',
      avatar: '',
      channel: 'Paperlayer Web',
      tags: ['device-setup']
    },
    {
      id: '2',
      name: 'Candice Matherson',
      lastMessage: 'Hey 👋, How many I help you?',
      timestamp: '3m • 25m',
      unread: 3,
      channel: 'Email Support',
      tags: ['lead', 'software']
    },
    {
      id: '3',
      name: 'Coreen Mewett',
      lastMessage: "I'm sorry to hear that. Please chang...",
      timestamp: '3m • 3mo',
      channel: 'Facebook'
    },
    {
      id: '4',
      name: 'Quent Dalliston',
      lastMessage: 'Sure! Can you please provide me wi...',
      timestamp: '3m • 3mo',
      unread: 1,
      channel: 'WhatsApp'
    }
  ];

  const messages: Message[] = [
    {
      id: '1',
      sender: 'Klaus Crawley',
      content: 'Hi, I need some help setting up my new device.',
      timestamp: 'Jan 15, 12:32 PM',
      isOwn: false
    },
    {
      id: '2',
      sender: 'You',
      content: 'No problem! Can you please tell me the make and model of your device and what specifically you need help with?',
      timestamp: 'Jan 15, 12:32 PM',
      isOwn: true
    },
    {
      id: '3',
      sender: 'System',
      content: 'Matthew M self-assigned this conversation',
      timestamp: '',
      isOwn: false
    },
    {
      id: '4',
      sender: 'System',
      content: 'Matthew M set the priority to high',
      timestamp: '',
      isOwn: false
    },
    {
      id: '5',
      sender: 'System',
      content: 'Matthew M added device-setup',
      timestamp: '',
      isOwn: false
    },
    {
      id: '6',
      sender: 'Klaus Crawley',
      content: '@Ben Nugent Can we use Captain here to automate these queries?',
      timestamp: 'Jan 16, 2:16 PM',
      isOwn: false
    }
  ];

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Logic to send message
      setMessageInput('');
    }
  };

  const selectedContactData = contacts.find(c => c.id === selectedContact);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar - Settings/Navigation */}
      <div className="w-64 bg-card border-r border-border flex flex-col">
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold">Stellar Chat</h1>
          </div>
        </div>

        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-9"
            />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="space-y-1 p-2">
            <Button
              variant={activeSection === 'all' ? 'secondary' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveSection('all')}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              All Conversations
              <Badge variant="secondary" className="ml-auto">19</Badge>
            </Button>
            <Button
              variant={activeSection === 'mine' ? 'secondary' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveSection('mine')}
            >
              <User className="w-4 h-4 mr-2" />
              Mine
              <Badge variant="secondary" className="ml-auto">11</Badge>
            </Button>
            <Button
              variant={activeSection === 'unassigned' ? 'secondary' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveSection('unassigned')}
            >
              <Users className="w-4 h-4 mr-2" />
              Unassigned
              <Badge variant="secondary" className="ml-auto">6</Badge>
            </Button>

            <Separator className="my-2" />

            <div className="px-3 py-2 text-xs font-semibold text-muted-foreground">
              FOLDERS
            </div>
            <Button variant="ghost" className="w-full justify-start">
              <Archive className="w-4 h-4 mr-2" />
              Priority Conversations
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Tag className="w-4 h-4 mr-2" />
              Leads Inbox
            </Button>

            <Separator className="my-2" />

            <div className="px-3 py-2 text-xs font-semibold text-muted-foreground">
              TEAMS
            </div>
            <Button variant="ghost" className="w-full justify-start">
              <Users className="w-4 h-4 mr-2" />
              Sales
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Users className="w-4 h-4 mr-2" />
              Support L1
            </Button>

            <Separator className="my-2" />

            <div className="px-3 py-2 text-xs font-semibold text-muted-foreground">
              CHANNELS
            </div>
            <Button variant="ghost" className="w-full justify-start">
              <MessageSquare className="w-4 h-4 mr-2" />
              @paperlayer-b...
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Mail className="w-4 h-4 mr-2" />
              Paperlayer Em...
            </Button>
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-border">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Contact List */}
      <div className="w-96 bg-card border-r border-border flex flex-col">
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Conversations</h2>
            <Badge variant="outline">Open</Badge>
          </div>
          <div className="flex gap-2 mb-4">
            <Button variant="secondary" size="sm">Mine <Badge variant="secondary" className="ml-1">11</Badge></Button>
            <Button variant="ghost" size="sm">Unassigned <Badge variant="secondary" className="ml-1">6</Badge></Button>
            <Button variant="ghost" size="sm">All <Badge variant="secondary" className="ml-1">19</Badge></Button>
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="divide-y divide-border">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className={`p-4 cursor-pointer hover:bg-muted/50 transition-colors ${
                  selectedContact === contact.id ? 'bg-muted' : ''
                }`}
                onClick={() => setSelectedContact(contact.id)}
              >
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarImage src={contact.avatar} />
                    <AvatarFallback>{contact.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm">{contact.name}</span>
                        {contact.unread && (
                          <Badge variant="destructive" className="rounded-full w-5 h-5 flex items-center justify-center p-0 text-xs">
                            {contact.unread}
                          </Badge>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground">{contact.timestamp}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                      <MessageSquare className="w-3 h-3" />
                      {contact.channel}
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{contact.lastMessage}</p>
                    {contact.tags && (
                      <div className="flex gap-1 mt-2">
                        {contact.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Conversation Area */}
      <div className="flex-1 flex flex-col">
        {/* Conversation Header */}
        <div className="p-4 border-b border-border bg-card">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>{selectedContactData?.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{selectedContactData?.name}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <MessageSquare className="w-3 h-3" />
                  {selectedContactData?.channel}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Phone className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowContactInfo(!showContactInfo)}
              >
                <Info className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4 max-w-4xl mx-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'System' ? (
                  <div className="w-full text-center">
                    <p className="text-sm text-muted-foreground bg-muted/50 inline-block px-4 py-2 rounded">
                      {message.content}
                    </p>
                  </div>
                ) : (
                  <div className={`flex gap-2 max-w-[70%] ${message.isOwn ? 'flex-row-reverse' : ''}`}>
                    {!message.isOwn && (
                      <Avatar className="w-8 h-8">
                        <AvatarFallback>{message.sender.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      <div
                        className={`rounded-lg p-3 ${
                          message.isOwn
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                      {message.timestamp && (
                        <p className="text-xs text-muted-foreground mt-1 px-1">
                          {message.timestamp}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="p-4 border-t border-border bg-card">
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Paperclip className="w-4 h-4" />
            </Button>
            <Input
              placeholder="Type a message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button variant="ghost" size="icon">
              <Mic className="w-4 h-4" />
            </Button>
            <Button onClick={handleSendMessage}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Information Panel */}
      {showContactInfo && (
        <div className="w-80 bg-card border-l border-border flex flex-col">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <h3 className="font-semibold">Contact Information</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowContactInfo(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <ScrollArea className="flex-1">
            <div className="p-4">
              {/* Contact Profile */}
              <div className="text-center mb-6">
                <Avatar className="w-20 h-20 mx-auto mb-3">
                  <AvatarFallback className="text-2xl">{selectedContactData?.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <h4 className="font-semibold text-lg">{selectedContactData?.name}</h4>
                <p className="text-sm text-muted-foreground">Founder, Drift Burner</p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">kcrawley6@driftburner.inc</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+14155552398</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Company</p>
                    <p className="text-sm text-muted-foreground">Drift Burner</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">San Francisco, United States 🇺🇸</p>
                  </div>
                </div>

                <Separator />

                {/* Social Links */}
                <div>
                  <p className="text-sm font-medium mb-3">Social Media</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <Separator />

                {/* Expandable Sections */}
                <Button variant="ghost" className="w-full justify-between">
                  <span>Conversation Actions</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button variant="ghost" className="w-full justify-between">
                  <span>Conversation participants</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button variant="ghost" className="w-full justify-between">
                  <span>Macros</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button variant="ghost" className="w-full justify-between">
                  <span>Contact Attributes</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button variant="ghost" className="w-full justify-between">
                  <span>Conversation Information</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button variant="ghost" className="w-full justify-between">
                  <span>Previous Conversations</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </ScrollArea>
        </div>
      )}
    </div>
  );
};

export default MessagesPage;
