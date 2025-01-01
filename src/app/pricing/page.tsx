"use client"

import { useState } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const services = [
  { id: 'seo', name: 'SEO', price: 1000 },
  { id: 'ppc', name: 'PPC', price: 1500 },
  { id: 'social', name: 'Social Media Marketing', price: 1200 },
  { id: 'content', name: 'Content Marketing', price: 800 },
  { id: 'email', name: 'Email Marketing', price: 600 },
  { id: 'web', name: 'Web Design', price: 2000 },
]

interface Service {
  id: string
  name: string
  price: number
}

export default function PricingPage() {
  const [selectedServices, setSelectedServices] = useState<Service[]>([])
  const [totalPrice, setTotalPrice] = useState(0)

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return

    const { source, destination } = result

    if (source.droppableId === 'services' && destination.droppableId === 'selected') {
      const service = services[source.index]
      if (!selectedServices.find(s => s.id === service.id)) {
        setSelectedServices([...selectedServices, service])
        setTotalPrice(totalPrice + service.price)
      }
    } else if (source.droppableId === 'selected' && destination.droppableId === 'services') {
      const [removed] = selectedServices.splice(source.index, 1)
      setSelectedServices([...selectedServices])
      setTotalPrice(totalPrice - removed.price)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-10 text-center">Pricing</h1>
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid md:grid-cols-2 gap-8">
              <Droppable droppableId="services">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    <Card>
                      <CardHeader>
                        <CardTitle>Available Services</CardTitle>
                      </CardHeader>
                      <CardContent>
                        {services.map((service, index) => (
                          <Draggable key={service.id} draggableId={service.id} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="bg-gray-100 p-4 mb-2 rounded"
                              >
                                {service.name} - ${service.price}
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </CardContent>
                    </Card>
                  </div>
                )}
              </Droppable>
              <Droppable droppableId="selected">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    <Card>
                      <CardHeader>
                        <CardTitle>Selected Services</CardTitle>
                      </CardHeader>
                      <CardContent>
                        {selectedServices.map((service, index) => (
                          <Draggable key={service.id} draggableId={service.id} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="bg-blue-100 p-4 mb-2 rounded"
                              >
                                {service.name} - ${service.price}
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </CardContent>
                    </Card>
                  </div>
                )}
              </Droppable>
            </div>
          </DragDropContext>
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Total Price: ${totalPrice}</h2>
            <Button>Proceed to Checkout</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

